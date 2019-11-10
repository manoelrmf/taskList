package br.com.tasks.domain;
import com.fasterxml.jackson.annotation.JsonValue;

public enum StatusTarefaEnum {

    AGR(0, "Aguardando"),
    ATR(1, "Em atraso"),
    CON(2, "Concluida");

    private String status;

    StatusTarefaEnum(int i, String status) {
        this.status = status;
    }

    @JsonValue
    public String getStatus() {
        return status;
    }
}
