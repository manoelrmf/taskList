package br.com.tasks.service;

import br.com.tasks.domain.Tarefa;
import br.com.tasks.domain.Usuario;

import java.util.Date;
import java.util.List;

public interface TarefaService {

    void save(Tarefa tarefa);

    void update(Long id, Tarefa tarefa);

    void delete(Long id);

    Tarefa findById(Long id);

    List<Tarefa> findAll();

    List<Tarefa> buscaTarefasPendentes();

    List<Tarefa> buscaTarefasEmAtraso();

    List<Tarefa> buscaTarefasConcluidas();

    List<Tarefa> buscaTarefasPorUsuario(Long id);

    Tarefa updateTitulo(Long id, String titulo);

    Tarefa updateDescricao(Long id, String descricao);
}
