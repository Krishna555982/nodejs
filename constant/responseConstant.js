const responseStatus = {
SUCCESS: "Success",
ERROR: "Error",
};

const statusCodes = {
    OK: 200,
    CREATED: 201,
    ACCCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
   INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,

}

const messages = {
COMMON_POST_MSG: "Data Saved Successfully",
COMMON_GET_MSG: "Data Retrieved Successfully",
COMMON_UPDATE_MSG: "Data Updated Successfully",
DATA_AVAILABLE: "Data Available",
No_DATA_AVAILABLE: "No Data Available",
COMMON_DELETE_MSG: "Deleted Successfully",
INTERNAL_SERVER_ERROR: "Internal Server Error",
CREATE_SUCCESS_MSG: "No Data Available",
VALIDATION_ERROR: "Validation Failed",
COMMON_SERVER_ERROR: "Something went wrong, Please check",
};

module.exports= {responseStatus,statusCodes,messages}