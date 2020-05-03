package com.vehicle.dao;

import com.vehicle.bean.VehicleBean;
import com.vehicle.bean.VehicleInputBean;
import com.vehicle.mapping.Pricedb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class VehicleDAOImpl implements VehicleDAO {

    @Autowired
    MongoTemplate mongoTemplate;


    public List<VehicleBean> getVehicleList(VehicleInputBean inputBean) {

        List<VehicleBean> vehicleBeanList = new ArrayList<>();

        try {

            Query query = new Query();

            query = this.makeWhereclause(query, inputBean);

            long count = mongoTemplate.count(query, Pricedb.class);

            System.out.println("Count : " + count);

            if (count != 0) {

                int range = 150;
                int min = 0;

                query.with(Sort.by(Sort.Direction.DESC, "ID"));
                query.skip(min).limit(range);


                List<Pricedb> systemUserList = mongoTemplate.find(query, Pricedb.class);

                for (Pricedb user : systemUserList) {

                    VehicleBean newBean = new VehicleBean();

                    newBean.setId(user.getIdk());
                    newBean.setBrand(user.getBrand());
                    newBean.setModel(user.getModel());

                    vehicleBeanList.add(newBean);

                }

            }

        } catch (Exception ex) {

            System.out.println(ex);
        }

       return vehicleBeanList ;
    }

    private Query makeWhereclause(Query query, VehicleInputBean inputBean) throws ParseException {

        if (inputBean.getModelSearch() != null && !inputBean.getModelSearch().isEmpty()) {
            query.addCriteria(Criteria.where("Model").is(inputBean.getModelSearch()));
        } else if (inputBean.getBrandSearch() != null && !inputBean.getBrandSearch().isEmpty()) {
            query.addCriteria(Criteria.where("Brand").is(inputBean.getBrandSearch()));
        }

        return query;
    }


}
