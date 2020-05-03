package com.vehicle.controller;

import com.vehicle.bean.VehicleBean;
import com.vehicle.bean.VehicleInputBean;
import com.vehicle.dao.VehicleDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
    VehicleDAO vehicleDAO;

    @RequestMapping(value = "/listVehicle", method = RequestMethod.GET)
    public List<VehicleBean> getAllVehicles() {
        System.out.println("UserManagementController : getAllUsers");

        List<VehicleBean> pricedbList = vehicleDAO.getVehicleList(new VehicleInputBean("","",""));
        System.out.println(pricedbList.get(0).getBrand());
        return pricedbList;
    }


}
