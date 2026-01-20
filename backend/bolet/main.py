from fastapi import FastAPI
from bolet.interfaces.api.routers import health

app = FastAPI(title="Bolet API")

app.include_router(health.router)

@app.get("/")
async def root():
    return {"message": "Welcome to Bolet API"}
