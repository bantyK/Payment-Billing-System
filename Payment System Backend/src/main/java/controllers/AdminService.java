package controllers;

import org.springframework.data.repository.CrudRepository;

public interface AdminService extends CrudRepository<Admin, Long> {
}
