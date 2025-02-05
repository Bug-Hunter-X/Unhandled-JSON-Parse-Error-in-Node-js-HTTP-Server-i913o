# Unhandled JSON Parse Error in Node.js HTTP Server

This repository demonstrates a common but often overlooked error in Node.js: improper handling of request body parsing within an HTTP server. The `bug.js` file showcases the problematic code, resulting in cryptic error messages. The `bugSolution.js` file provides a corrected version with robust error handling.

## Problem

The original code attempts to parse the request body as JSON without verifying its presence or format.  This can lead to unexpected errors and inconsistent behavior.

## Solution

The improved code addresses the issue by first checking if the request body is available and properly formatted as JSON before attempting to parse it.  This approach significantly enhances error handling and prevents unexpected server crashes.