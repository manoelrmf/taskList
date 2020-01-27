package br.com.tasks.service;

import br.com.tasks.domain.Tarefa;
import br.com.tasks.domain.Usuario;

import java.util.List;

public interface UsuarioService {

    void save(Usuario usuario);

    void update(Long id, Usuario usuario);

    void delete(Long id);

    Usuario findById(Long id);

    List<Usuario> findAll();

    Usuario updateSenha(Long id, String txSenha);

    Usuario findUserForLoginAndPassword(String login, String password);

}
