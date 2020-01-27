package br.com.tasks.dao;

import br.com.tasks.domain.Usuario;
import br.com.tasks.exception.NaoExisteDaoException;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public class UsuarioDaoImpl implements UsuarioDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void save(Usuario usuario) {

        entityManager.persist(usuario);
    }

    @Override
    public void update(Usuario usuario) {

        entityManager.merge(usuario);
    }

    @Override
    public void delete(Long id) {
        try {
            entityManager.remove(entityManager.getReference(Usuario.class, id));
        } catch (EntityNotFoundException ex) {
            throw new NaoExisteDaoException("Usuario não encontrado para id = " + id + ".");
        }
    }

    @Override
    public Usuario findById(Long id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        if (usuario == null) {
            throw new NaoExisteDaoException("Usuario não encontrado para id = " + id + ".");
        }
        return usuario;
    }

    @Override
    public List<Usuario> findAll() {
        return entityManager
                .createQuery("select c from Usuario c", Usuario.class)
                .getResultList();
    }

    public Usuario findByLoginAndPassword(String txLogin, String txSenha){
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Usuario> result = cb.createQuery(Usuario.class);
        Root<Usuario> usuarios = result.from(Usuario.class);
        Predicate pLogin = cb.like(usuarios.get("txLogin"), "%" + txLogin + "%");
        Predicate pSenha = cb.like(usuarios.get("txSenha"), "%" + txSenha + "%");
        Predicate p = cb.and(pLogin, pSenha);
        result.select(usuarios).where(p);
        return entityManager.createQuery(result).getSingleResult();
    }

}
