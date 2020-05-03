import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Icon from 'common/Icon';
import { escapeRegex } from 'utils';
import Input from 'common/Input';
import styles from './index.module.scss';

import Article from 'common/Article';

import { connect } from 'react-redux';

const Search = ({ app, users, loadMenu }) => {
  const [query, setQuery] = useState<string>('');

  const filteredUsers = query
    ? users.filter(({ username }) => username.match(new RegExp(escapeRegex(query), 'gi')))
    : users;

  const results = filteredUsers.map((user) => <Article key={user.id} user={user} />);

  return (
    <main className={styles.search}>
      <Grid fluid>
        <Row middle="xs">
          <Col xs={10}>
            <Input
              placeholder="Find Friends"
              leftIcon="faSearch"
              // rightIconClick={() => {}}
              // onChange={(e) => setQuery(e.currentTarget.value.trim())}
            />
          </Col>
          <Col xs={2}>Cancel</Col>
        </Row>
      </Grid>
      <section className={styles.results}>
        {query.length ? (
          results.length ? (
            results
          ) : (
            '💩 No results'
          )
        ) : (
          <p>
            <Icon icon="faSearch" />
            Search for people, stories, games and more
          </p>
        )}
      </section>
    </main>
  );
};

const mapStateToProps = ({ app, users }) => ({
  app,
  users: users.dummyUsers
});

export default connect(mapStateToProps)(Search);
