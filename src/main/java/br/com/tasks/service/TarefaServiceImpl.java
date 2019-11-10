package br.com.tasks.service;

import br.com.tasks.dao.TarefaDao;
import br.com.tasks.domain.Tarefa;
import br.com.tasks.exception.IdNaoValidoServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class TarefaServiceImpl implements TarefaService {

    @Autowired
    private TarefaDao dao;

    @Override
    public void save(Tarefa tarefa) {

        dao.save(tarefa);
    }

    @Override
    public void update(Long id, Tarefa tarefa) {
        tarefa.setId(idValido(id));
        dao.findById(id);
        dao.update(tarefa);
    }

    @Override
    public void delete(Long id) {

        dao.delete(idValido(id));
    }

    @Override @Transactional(readOnly = true)
    public Tarefa findById(Long id) {

        return dao.findById(idValido(id));
    }

    @Override @Transactional(readOnly = true)
    public List<Tarefa> findAll() {

        return dao.findAll();
    }
    @Override
    public Tarefa updateTitulo(Long id, String titulo) {

        Tarefa tarefa = dao.findById(idValido(id));
        tarefa.setTitulo(titulo);
        return tarefa;
    }

    private Long idValido(Long id) {
        if (id <= 0) {
            throw new IdNaoValidoServiceException("Valor do campo id está invalido. Deve ser uma valor inteiro maior que zero.");
        }
        return id;
    }
}
