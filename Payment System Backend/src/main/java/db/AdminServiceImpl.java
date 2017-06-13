package db;

import controllers.LoginInformation;
import model.Admin;

import java.sql.*;
import java.util.*;
import java.util.Date;

/**
 * Created by Banty on 11/06/17.
 */
public class AdminServiceImpl implements AdminService {
    Connection connection;
    PreparedStatement preparedStatement;

    public AdminServiceImpl() {
        try {
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/payment_system", "root", "password");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Admin> getAllAdmin() {
        List<Admin> admins = new ArrayList<>();
        try {
            preparedStatement = connection.prepareStatement("SELECT * from AdminTable");
            ResultSet resultSet = preparedStatement.executeQuery();

            while(resultSet.next()) {
                int id = resultSet.getInt("id");
                String username = resultSet.getString("username");
                String password = resultSet.getString("password");
                Date dateOfJoining = resultSet.getDate("date_of_joining");
                int salary = resultSet.getInt("salary");

                Admin admin = new Admin(id,username,password,dateOfJoining,salary);
                admins.add(admin);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return admins;
    }

    @Override
    public Admin getAdmin(int id) {
        try {
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM AdminTable WHERE id = ?");
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();
            if (!resultSet.first()) {
                return null;
            }
            Admin admin = new Admin(
                    resultSet.getInt("id"),
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getDate("date_of_joining"),
                    resultSet.getInt("salary")
            );

            return admin;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void addAdmin(Admin admin) {
        String sqlQuery = "INSERT into AdminTable (username,password,date_of_joining,salary) " +
                "values (?,?,?,?)";
        try {
            preparedStatement = connection.prepareStatement(sqlQuery,Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1,admin.getUsername());
            preparedStatement.setString(2,admin.getPassword());
            preparedStatement.setDate(3,new java.sql.Date(admin.getDateOfJoining().getDate()));
            preparedStatement.setInt(4,admin.getSalary());
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    @Override
    public void deleteAdmin(int id) {
        Admin adminToBeDeleted = getAdmin(id);
        if(adminToBeDeleted != null) {
            String sqlDeleteStatement = "DELETE FROM AdminTable WHERE id = " + id;
            try{
                PreparedStatement preparedStatement = connection.prepareStatement(sqlDeleteStatement);
                preparedStatement.executeUpdate();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

    }

    @Override
    public String isValidAdmin(LoginInformation loginInformation){
        String isAdmin = "false";
        for (Admin admin : getAllAdmin()) {
            if(admin.getUsername().equals(loginInformation.getUsername()) &&
                    admin.getPassword().equals(loginInformation.getPassword())) {
                isAdmin = "true";
            }
        }
        return isAdmin;
    }


}
