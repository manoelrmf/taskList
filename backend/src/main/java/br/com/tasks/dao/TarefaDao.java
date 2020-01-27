package br.com.tasks.dao;

import br.com.tasks.domain.Tarefa;
import br.com.tasks.domain.Usuario;

import java.util.List;

public interface TarefaDao {

    void save(Tarefa curso);

    void update(Tarefa curso);

    void delete(Long id);

    Tarefa findById(Long id);

    List<Tarefa> findAll();

    List<Tarefa> buscaTarefasPorStatus(int id);

    List<Tarefa> buscaTarefasPorUsuario(Usuario usuario);


}
