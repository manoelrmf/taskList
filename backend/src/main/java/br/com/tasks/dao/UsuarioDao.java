package br.com.tasks.dao;

import br.com.tasks.domain.Tarefa;
import br.com.tasks.domain.Usuario;

import java.util.List;

public interface UsuarioDao {

    void save(Usuario usuario);

    void update(Usuario usuario);

    void delete(Long id);

    Usuario findById(Long id);

    List<Usuario> findAll();

    Usuario findByLoginAndPassword(String txLogin,String txPassword);


}
