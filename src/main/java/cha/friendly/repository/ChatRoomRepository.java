package cha.friendly.repository;

import cha.friendly.domain.ChatRoom;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.*;
import java.util.function.Function;

@Repository
public class ChatRoomRepository implements MongoRepository<ChatRoom, String> {
    @Override
    public <S extends ChatRoom> S save(S entity) {
        return null;
    }

    @Override
    public <S extends ChatRoom> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<ChatRoom> findById(String s) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(String s) {
        return false;
    }

    @Override
    public List<ChatRoom> findAll() {
        return null;
    }

    @Override
    public Iterable<ChatRoom> findAllById(Iterable<String> strings) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(String s) {

    }

    @Override
    public void delete(ChatRoom entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends String> strings) {

    }

    @Override
    public void deleteAll(Iterable<? extends ChatRoom> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<ChatRoom> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<ChatRoom> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public <S extends ChatRoom> S insert(S entity) {
        return null;
    }

    @Override
    public <S extends ChatRoom> List<S> insert(Iterable<S> entities) {
        return null;
    }

    @Override
    public <S extends ChatRoom> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends ChatRoom> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends ChatRoom> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends ChatRoom> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends ChatRoom> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends ChatRoom> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends ChatRoom, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}
