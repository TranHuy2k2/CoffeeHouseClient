import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class OrderService {
    constructor(private apiService: ApiService) {}
    getAll(filters?: any) {
        const params = new HttpParams()
            .set('pageNo', filters?.pageNo || '')
            .set('customerId', filters?.customerId || '')
            .set('sortBy', filters?.sortBy || '')
            .set('pageSize', filters?.pageSize || '')
            .set('reverse', !!filters?.reverse);
        return this.apiService.get('/order', params);
    }
    getFullOrder(id: number) {
        return this.apiService.get(`/order/${id}`);
    }
    updateOrder(id: number, body: any) {
        return this.apiService.put(`/order/${id}`, body);
    }
    createOrder() {
        return this.apiService.post('/order');
    }
    deleteOrder(id: number) {
        return this.apiService.delete(`/order/${id}`);
    }
}
