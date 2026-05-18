from fastapi import FastAPI
import mysql.connector

app = FastAPI()

# DB Connection
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Shruti@123",
        database="business_db"
    )

@app.get("/")
def home():
    return {"message": "API is working"}


@app.get("/total-listings")
def total_listings():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM listing_master")
    result = cursor.fetchone()

    conn.close()
    return {"total": result[0]}

@app.get("/city-count")
def city_count():
    conn = get_db_connection()
    cursor = conn.cursor()

    query = """
    SELECT city, COUNT(*) as count 
    FROM listing_master 
    GROUP BY city;
    """

    cursor.execute(query)
    result = cursor.fetchall()

    data = []
    for row in result:
        data.append({"city": row[0], "count": row[1]})

    conn.close()
    return data

@app.get("/category-count")
def category_count():
    conn = get_db_connection()
    cursor = conn.cursor()

    query = """
    SELECT category, COUNT(*) 
    FROM listing_master 
    GROUP BY category;
    """

    cursor.execute(query)
    result = cursor.fetchall()

    data = []
    for row in result:
        data.append({"category": row[0], "count": row[1]})

    conn.close()
    return data



@app.get("/source-count")
def source_count():
    conn = get_db_connection()
    cursor = conn.cursor()

    query = """
    SELECT source, COUNT(*) 
    FROM listing_master 
    GROUP BY source;
    """

    cursor.execute(query)
    result = cursor.fetchall()

    data = []
    for row in result:
        data.append({"source": row[0], "count": row[1]})

    conn.close()
    return data