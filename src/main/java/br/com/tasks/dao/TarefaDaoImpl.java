package br.com.tasks.dao;

import br.com.tasks.domain.Tarefa;
import br.com.tasks.exception.NaoExisteDaoException;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class TarefaDaoImpl implements TarefaDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void save(Tarefa tarefa) {

        entityManager.persist(tarefa);
    }

    @Override
    public void update(Tarefa tarefa) {

        entityManager.merge(tarefa);
    }

    @Override
    public void delete(Long id) {
        try {
            entityManager.remove(entityManager.getReference(Tarefa.class, id));
        } catch (EntityNotFoundException ex) {
            throw new NaoExisteDaoException("Tarefa não encontrado para id = " + id + ".");
        }
    }

    @Override
    public Tarefa findById(Long id) {
        Tarefa tarefa = entityManager.find(Tarefa.class, id);
        if (tarefa == null) {
            throw new NaoExisteDaoException("Tarefa não encontrado para id = " + id + ".");
        }
        return tarefa;
    }

    @Override
    public List<Tarefa> findAll() {
        return entityManager
                .createQuery("select c from Tarefa c", Tarefa.class)
                .getResultList();
    }
}
