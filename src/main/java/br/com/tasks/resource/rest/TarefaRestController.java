package br.com.tasks.resource.rest;

import br.com.tasks.domain.Tarefa;
import br.com.tasks.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(
        value = "/tarefas",
        produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
        consumes = MediaType.APPLICATION_JSON_UTF8_VALUE
)
public class TarefaRestController {

    @Autowired
    private TarefaService service;

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable("id") Long id) {

        service.delete(id);
    }

    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Tarefa editarTitulo(@PathVariable("id") Long id, @RequestBody Tarefa tarefa) {

        return service.updateTitulo(id, tarefa.getTitulo());
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Tarefa editar(@PathVariable("id") Long id, @RequestBody Tarefa tarefa) {

        service.update(id, tarefa);
        return tarefa;
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Tarefa getTarefa(@PathVariable("id") Long id) {

        return service.findById(id);
    }

    @PostMapping
    public ResponseEntity<Void> salvar(@RequestBody Tarefa tarefa) {

        service.save(tarefa);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(tarefa.getId())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Tarefa> listar() {
        return service.findAll();
    }
}
