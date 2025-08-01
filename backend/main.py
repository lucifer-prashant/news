# backend/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# --- CORS Middleware ---
# This is crucial for allowing your React frontend (on a different port)
# to communicate with your backend.
origins = [
    "http://localhost:3000", # The default port for React dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# --- End of CORS Middleware ---


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/test")
def test_endpoint():
    """A test endpoint to see if frontend and backend are connected."""
    return {"message": "Hello from FastAPI!"}