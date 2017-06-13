package db;

import controllers.LoginInformation;
import model.Admin;

import java.util.List;

/**
 * Created by Banty on 11/06/17.
 */
public interface AdminService {
    List<Admin> getAllAdmin();

    Admin getAdmin(int id);

    void addAdmin(Admin admin);

    void deleteAdmin(int id);

    String isValidAdmin(LoginInformation loginInformation);
}
