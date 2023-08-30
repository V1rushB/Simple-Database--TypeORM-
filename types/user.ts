import express from 'express';

namespace User {
    export interface usr {
        username: string,
        password: string,
    }

    export interface request extends express.Request {
        body: {
            data : usr
        }
    }
}
export default User;