<p align="center">
NestJS Basic Starter
</p>

# Installation

<p>
install cli globly

    npm i -g @nestjs/cli

</P>
<p>
create new project in nestjs

    nest new .

</P>

<p>choose whatever npm,yarn or pnpm (i choose pnpm)

    pnpm i

</P>
<p>

</P>
<p>

# Running the app in

</P>development mode

    pnpm run start

<p>

</P>
<p>watch mode

    pnpm run start:dev

</P>
<p>production mode

    pnpm run start:prod

</P>

## Test

<p>unit tests
    
    pnpm run test
</P>

<p>e2e tests
   
    pnpm run test:e2e

</P>

<p>test coverage
  
    pnpm run test:cov
</P>

# create modules file

<p>add module with name users
  
    nest g module users
</P>
<p>add controllers for users
  
    nest g controller users
</P>
<p>add services for users
  
    nest g service users
</P>

# dot env configuration

<p>
add .env.development or .env.test.local for development and production respectively

        PORT = 7164

</P>
<p>add config module in app.module.ts
  typescript will automatically look up the environment variables from .env file

        pnpm add -D @nestjs/config

</P>
