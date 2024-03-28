FROM postgres:16
USER postgres
RUN whoami
ADD ./docker-entrypoint-initdb.d/init.sql /docker-entrypoint-initdb.d/init.sql
RUN chown postgres:postgres /docker-entrypoint-initdb.d/init.sql
ENTRYPOINT ["docker-entrypoint.sh"]
EXPOSE 5432
CMD ["postgres"]

