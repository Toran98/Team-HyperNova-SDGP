package com.vehicle.dao;

import com.vehicle.bean.VehicleBean;
import com.vehicle.bean.VehicleInputBean;

import java.util.List;

public interface VehicleDAO {

    public List<VehicleBean> getVehicleList(VehicleInputBean inputBean);
}
