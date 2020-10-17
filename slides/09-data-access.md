### Data access with F# (Postgres edition)

- Very simple when using [Npgsql.FSharp](https://github.com/Zaid-Ajaj/Npgsql.FSharp)
- Built ontop of [Ngpsql](https://github.com/npgsql/npgsql)
- Static SQL analysis in VS using [Npgsql.FSharp.Analyzer](https://github.com/Zaid-Ajaj/Npgsql.FSharp.Analyzer)
- Schema management with migrations out of scope, recommended to use [DbUp](https://github.com/DbUp/DbUp)
- Similar API for different providers
    - [DustyTables](https://github.com/Zaid-Ajaj/DustyTables) for MS-SQL
    - [Fumble](https://github.com/tforkmann/Fumble) for SQLite
    - No static analysis :(