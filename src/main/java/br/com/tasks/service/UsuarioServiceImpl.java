package br.com.tasks.service;

import br.com.tasks.dao.TarefaDao;
import br.com.tasks.dao.UsuarioDao;
import br.com.tasks.domain.StatusTarefaEnum;
import br.com.tasks.domain.Tarefa;
import br.com.tasks.domain.Usuario;
import br.com.tasks.exception.IdNaoValidoServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioDao dao;

    @Override
    public void save(Usuario usuario) {

        dao.save(usuario);
    }

    @Override
    public void update(Long id, Usuario usuario) {
        usuario.setId(idValido(id));
        dao.findById(id);
        dao.update(usuario);
    }

    @Override
    public void delete(Long id) {

        dao.delete(idValido(id));
    }

    @Override @Transactional(readOnly = true)
    public Usuario findById(Long id) {

        return dao.findById(idValido(id));
    }

    @Override @Transactional(readOnly = true)
    public List<Usuario> findAll() {

        return dao.findAll();
    }

    public Usuario updateSenha(Long id, String txSenha){
        Usuario usuario = dao.findById(idValido(id));
        usuario.setTxSenha(txSenha);
        return usuario;
    }

    private Long idValido(Long id) {
        if (id <= 0) {
            throw new IdNaoValidoServiceException("Valor do campo id está invalido. Deve ser uma valor inteiro maior que zero.");
        }
        return id;
    }
}
