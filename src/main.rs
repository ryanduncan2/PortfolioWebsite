use actix_web::{App, HttpServer};
use actix_files;

#[tokio::main]
async fn main() -> std::io::Result<()>
{
    HttpServer::new(|| {
        App::new().service(
            actix_files::Files::new("/", "./public").index_file("index.html")
        )
    }).bind("0.0.0.0:80")?
    .run()
    .await
}
