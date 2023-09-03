package cha.friendly.controller;

public class IamportClient {
    private String restApiKey;
    private String restApiSecret;

    public IamportClient(String restApiKey, String restApiSecret) {
        this.restApiKey = restApiKey;
        this.restApiSecret = restApiSecret;
    }
}
