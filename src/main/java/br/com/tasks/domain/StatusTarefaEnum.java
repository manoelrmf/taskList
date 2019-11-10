package br.com.tasks.domain;
import com.fasterxml.jackson.annotation.JsonValue;

public enum StatusTarefaEnum {

    ATR(1, "Em atraso"),
    PEN(1, "Aguardando"),
    CON(1, "Concluida");

    private String status;

    StatusTarefaEnum(int i, String status) {
        this.status = status;
    }

    @JsonValue
    public String getStatus() {
        return status;
    }
}
