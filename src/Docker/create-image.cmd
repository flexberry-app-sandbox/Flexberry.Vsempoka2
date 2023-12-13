docker build --no-cache -f SQL\Dockerfile.PostgreSql -t vsempoka2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t vsempoka2/app ../..
