import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const latest = useMemo(
    () => ({
      task: setTimeout(() => {
        async function loadResults() {
          const response = await api.get('available', {
            params: {
              date: new Date(),
              page: 1,
              to: 'all',
              search,
            },
          });

          onSearch(response.data);
        }

        loadResults();
      }, 600),
    }),
    [onSearch, search]
  );

  function handleSearchChange(e) {
    if (latest) clearTimeout(latest.task);
    setSearch(e.target.value);
  }

  return (
    <input
      value={search}
      onChange={handleSearchChange}
      placeholder="Search here"
    />
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
