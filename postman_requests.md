# Postman Requests for Call Schedule and Contact Submission

## Call Schedule Endpoints

### 1. Create Call Schedule

**Method:** POST
**URL:** `http://localhost:5000/api/call_schedule`
**Headers:** `Content-Type: application/json`
**Body (raw JSON):**

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "preferred_time": "10:00 AM",
    "preferred_date": "2024-02-15",
    "status": "pending"
}
```

### 2. Get Call Schedule by ID

**Method:** GET
**URL:** `http://localhost:5000/api/call_schedule/1`
**Headers:** `Content-Type: application/json`

### 3. Update Call Schedule

**Method:** PATCH
**URL:** `http://localhost:5000/api/call_schedule/1`
**Headers:** `Content-Type: application/json`
**Body (raw JSON):**

```json
{
    "status": "confirmed",
    "preferred_time": "2:00 PM"
}
```

### 4. Delete Call Schedule

**Method:** DELETE
**URL:** `http://localhost:5000/api/call_schedule/1`
**Headers:** `Content-Type: application/json`

## Contact Submission Endpoints

### 1. Create Contact Submission

**Method:** POST
**URL:** `http://localhost:5000/api/contact_submission`
**Headers:** `Content-Type: application/json`
**Body (raw JSON):**

```json
{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "message": "I would like to inquire about your services.",
    "status": "new"
}
```

### 2. Get Contact Submission by ID

**Method:** GET
**URL:** `http://localhost:5000/api/contact_submission/1`
**Headers:** `Content-Type: application/json`

### 3. Update Contact Submission

**Method:** PATCH
**URL:** `http://localhost:5000/api/contact_submission/1`
**Headers:** `Content-Type: application/json`
**Body (raw JSON):**

```json
{
    "status": "responded"
}
```

### 4. Delete Contact Submission

**Method:** DELETE
**URL:** `http://localhost:5000/api/contact_submission/1`
**Headers:** `Content-Type: application/json`
