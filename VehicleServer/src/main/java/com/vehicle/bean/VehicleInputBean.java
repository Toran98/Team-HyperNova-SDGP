package com.vehicle.bean;

public class VehicleInputBean {

    private String idSearch;
    private String brandSearch;
    private String modelSearch;

    public VehicleInputBean(String idSearch, String brandSearch, String modelSearch) {
        this.idSearch = idSearch;
        this.brandSearch = brandSearch;
        this.modelSearch = modelSearch;
    }

    public String getIdSearch() {
        return idSearch;
    }

    public void setIdSearch(String idSearch) {
        this.idSearch = idSearch;
    }

    public String getBrandSearch() {
        return brandSearch;
    }

    public void setBrandSearch(String brandSearch) {
        this.brandSearch = brandSearch;
    }

    public String getModelSearch() {
        return modelSearch;
    }

    public void setModelSearch(String modelSearch) {
        this.modelSearch = modelSearch;
    }
}
