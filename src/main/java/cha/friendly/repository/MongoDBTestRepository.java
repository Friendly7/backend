package cha.friendly.repository;

import cha.friendly.domain.MongoDBTestModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoDBTestRepository extends MongoRepository<MongoDBTestModel, String> {
    MongoDBTestModel findByName(String name);

}