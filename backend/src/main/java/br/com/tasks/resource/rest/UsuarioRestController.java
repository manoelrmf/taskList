package br.com.tasks.resource.rest;

import br.com.tasks.domain.Tarefa;
import br.com.tasks.domain.Usuario;
import br.com.tasks.service.TarefaService;
import br.com.tasks.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.handler.UserRoleAuthorizationInterceptor;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(
        value = "/usuarios",
        produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
        consumes = MediaType.APPLICATION_JSON_UTF8_VALUE
)
public class UsuarioRestController {

    @Autowired
    private UsuarioService service;

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Usuario getUsuario(@PathVariable("id") Long id) {
        return service.findById(id);
    }

    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario usuario) {
       return service.findUserForLoginAndPassword(usuario.getTxLogin(), usuario.getTxSenha());
    }


    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Usuario editar(@PathVariable("id") Long id, @RequestBody Usuario usuario) {
        service.update(id, usuario);
        return usuario;
    }

    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Usuario editarSenha(@PathVariable("id") Long id, @RequestBody Usuario usuario) {
        return service.updateSenha(id, usuario.getTxSenha());
    }

    @PostMapping
    public ResponseEntity<Void> salvar(@RequestBody Usuario usuario) {
        service.save(usuario);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(usuario.getId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Usuario> listar() {
        return service.findAll();
    }
}
