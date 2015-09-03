# Transitmix

**TODO**: Note `brew install postgres` and [Postgres.app](http://postgresapp.com/)

## Setup

Transitmix is a Ruby application with a PostgreSQL database.

1. [Install Ruby](https://github.com/codeforamerica/howto/blob/master/Ruby.md).
2. [Install PostgreSQL](https://github.com/codeforamerica/howto/blob/master/PostgreSQL.md).

```
# Download the project
git clone https://github.com/codeforamerica/transitmix.git
cd transitmix

# Setup the environment
cp .env.sample .env
bundle install

# Start the database, then create and migrate
rake db:create db:migrate

# Run the app
bundle exec rackup
```

## Dependencies

```
brew install postgres       # http://www.postgresql.org/
brew cask install psequel   # http://www.psequel.com/
```

## Troubleshooting

### `rake aborted! LoadError: cannot load such file -- jasmine`

If you get this error after trying to run `rake db:create db:migrate`, you
should comment out `require 'jasmine'` in `Rakefile`.

---

Transitmix is a sketching tool for transit planners (both professional and
armchair) to quickly design routes and share with the public. It lives at
[transitmix.net](http://transitmix.net).

## About

### What does this do now?

- You can draw your own routes by dragging and dropping points and it snaps to a street grid.
- You can input stats like headway ("bus comes every X min"), speed (mph), and operating hours.
- It outputs stats like distance of route, # of buses required, and total cost.

### Who is this made by?

- [Sam Hashemi](https://github.com/samhashemi)
- [Dan Getelman](https://github.com/dget)
- [Tiffany Chu](https://github.com/tchu88)
- [Danny Whalen](https://github.com/invisiblefunnel)
- [Becky Boone](https://github.com/boonrs)
- [Maksim Pecherskiy](https://github.com/mrmaksimize)

With additional help from [Jason Denizac](https://github.com/jden), [Lyzi Diamond](https://github.com/lyzidiamond), and [Andrew Douglass](https://github.com/ardouglass).
