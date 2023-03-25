import { baseApi } from "./baseApi"

export const FeedbackApi = ({
    async getAll() {
        const response = await baseApi.get('/feedbacks');
        return response.data;
    },
    async addFeedback(data) {
        const response = await baseApi.post("/feedbacks", data);
        return response.data;
    },
    async updateComments(data) {
        const response = await baseApi.put(`/feedbacks/${data.id}`, data)
        return response.data
    },
    async getById(id) {
        const response = await baseApi.get(`/feedbacks/${id}`);
        return response.data;
    }
})