package cha.friendly.service;

import cha.friendly.domain.MongoDBTestModel;
import cha.friendly.repository.MongoDBTestRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class MongoDBTestService {

    private final MongoDBTestRepository mongoDBTestRepository;

    public MongoDBTestService(MongoDBTestRepository mongoDBTestRepository) {
        this.mongoDBTestRepository = mongoDBTestRepository;
    }

    public String selectUser(String name) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            if (mongoDBTestRepository.findByName(name) == null) {
                log.info("[Service] user name : {} not exist!!", name);
                return String.format("user name : %s not exist!!", name);
            } else {
                return objectMapper.writeValueAsString(mongoDBTestRepository.findByName(name));
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "ERROR";
        }
    }

    public void saveUser(String name, int age) {

        MongoDBTestModel mongoDBTestModel = new MongoDBTestModel();
        mongoDBTestModel.setName(name);
        mongoDBTestModel.setAge(age);

        if (mongoDBTestRepository.findByName(name) != null) {
            log.info("[Service][update] name is already exist!!");
            mongoDBTestModel.setId(mongoDBTestRepository.findByName(name).getId());
        } else {
            log.info("[Service][insert] New name received!!");
        }

        mongoDBTestRepository.save(mongoDBTestModel);
    }
}