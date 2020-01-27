package br.com.tasks.domain;
import com.fasterxml.jackson.annotation.JsonValue;

public enum StatusTarefaEnum {

    AGR(0, "Aguardando"),
    ATR(1, "Em atraso"),
    CON(2, "Concluida");

    private Integer id;
    private String status;

    private StatusTarefaEnum(Integer id, String status) {
        this.id = id;
        this.status = status;
    }

    @JsonValue
    public Integer getId() {
        return id;
    }

    @JsonValue
    public String getStatus() {
        return status;
    }
}
