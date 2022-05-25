import { graphql } from 'graphql';

import { clearDbAndRestartCounters, connectMongoose, disconnectMongoose, sanitizeTestObject } from '../../../../test';

import { schema } from '../../../schema/schema';

import { createEvent } from '../fixture/createEvent';

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it('should query all events', async () => {
  const event = await createEvent({
    name: 'event A',
    start: '2019-01-01T00:00:00.000Z',
    end: '2019-01-01T23:59:59.000Z',
    allDay: true,
  });

  const eventB = await createEvent({
    name: 'event B',
    start: '2019-01-02T00:00:00.000Z',
    end: '2019-01-02T23:59:59.000Z',
    allDay: false,
  });

  // language=GraphQL
  const query = `
    query Q {
      events(first: 10) {
        edges {
          node {
            name
            start
            end
            allDay
          }
        }
      }
    }
  `;

  const rootValue = {};
  //const contextValue = await getContext({});
  const variables = {};

  const result = await graphql(schema, query, rootValue, variables);

  expect(result.errors).toBeUndefined();

  // eslint-disable-next-line
  console.log('result: ', result.data.events.node.name);

  expect(result.data.events.edges.length).toBe(2);

  expect(result.data.events.edges.node.name).toBe(event.name);
  expect(result.data.events.edges.node.name).toBe(eventB.name);

  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});
