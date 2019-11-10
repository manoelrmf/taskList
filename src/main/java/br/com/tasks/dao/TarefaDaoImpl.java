package br.com.tasks.dao;

import br.com.tasks.domain.StatusTarefaEnum;
import br.com.tasks.domain.Tarefa;
import br.com.tasks.exception.NaoExisteDaoException;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
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

    @Override
    public List<Tarefa> buscaTarefasPorStatus(int idStatus){
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Tarefa> result = cb.createQuery(Tarefa.class);
        Root<Tarefa> tarefas = result.from(Tarefa.class);
        Predicate p = cb.equal(tarefas.get("inStatus"), idStatus);
        result.select(tarefas).where(p);
        TypedQuery<Tarefa> theQuery = entityManager.createQuery(result);
        List<Tarefa> resultadoTarefas = theQuery.getResultList();
        return resultadoTarefas;
    }

}
