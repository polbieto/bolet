import pytest
from fastapi.testclient import TestClient
from bolet.main import app

@pytest.fixture
def client():
    return TestClient(app)
