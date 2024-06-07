import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    /users
    get, post, patch, delete
    */

    // @Get()
    // findAll() {
    //     return []
    // }

    @Get()
    findAll(@Query("role") role?: "DEFAULT | MOD | ADMIN ") {
        return []
    }

    @Get("admin")
    findAllAdmins() {
        return []
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return { id }
    }

    //POST Request /users
    @Post()
    create(@Body() user: {}) {
        return user;
    }

    //PATCH /users/:id
    @Patch(":id")
    update(@Param("id") id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }

    //DELETE /users/: id
    @Delete(":id")
    delete(@Param("id") id: string) {
        return { id }
    }

}
