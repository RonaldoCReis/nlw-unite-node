import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';
import fastify from 'fastify';
import { createEvent } from './routes/create-event';
import { registerForEvent } from './routes/register-for-event';
import { getEvent } from './routes/get-event';
import { getAttendeeBadge } from './routes/get-attendee-badge';

const app = fastify();

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333');
});
