-- Users table for admin access
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL, -- Store hashed passwords
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Project types table
CREATE TABLE project_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL, -- e.g., Website, Web App, Mobile App
    description TEXT,
    base_cost DECIMAL(10, 2) DEFAULT 0.00, -- Optional base cost for this type
    is_active BOOLEAN DEFAULT TRUE
);

-- Features table
CREATE TABLE features (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL, -- e.g., Login, Admin Panel, Payment Integration
    description TEXT,
    estimated_hours DECIMAL(6, 2) DEFAULT 0.00, -- Estimated hours for this feature
    cost_modifier DECIMAL(5, 2) DEFAULT 1.00, -- Multiplier for cost based on complexity
    project_type_id INTEGER REFERENCES project_types(id) ON DELETE SET NULL, -- Optional: if a feature is specific to a project type
    is_active BOOLEAN DEFAULT TRUE
);

-- Tech stacks table
CREATE TABLE tech_stacks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL, -- e.g., React, Angular, Node.js, Python
    category VARCHAR(50), -- e.g., Frontend, Backend, Mobile
    cost_modifier DECIMAL(5, 2) DEFAULT 1.00, -- e.g., some techs might increase cost
    is_active BOOLEAN DEFAULT TRUE
);

-- Design needs table
CREATE TABLE design_needs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL, -- e.g., UI/UX Design, Branding, Wireframes
    description TEXT,
    estimated_hours DECIMAL(6, 2) DEFAULT 0.00,
    cost_modifier DECIMAL(5, 2) DEFAULT 1.00,
    is_active BOOLEAN DEFAULT TRUE
);

-- Estimates table to store submitted estimation requests
CREATE TABLE estimates (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255),
    client_email VARCHAR(255),
    client_company VARCHAR(255),
    project_type_id INTEGER REFERENCES project_types(id),
    timeline_preference VARCHAR(50), -- e.g., Urgent, 1-3 months, 3-6 months
    team_involvement VARCHAR(50), -- e.g., Dedicated, Shared
    estimated_total_cost DECIMAL(12, 2),
    estimated_timeline_weeks INTEGER,
    status VARCHAR(50) DEFAULT 'Pending', -- e.g., Pending, Contacted, Archived
    notes TEXT, -- Any additional notes from client or admin
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Junction table for selected features in an estimate
CREATE TABLE estimate_selected_features (
    id SERIAL PRIMARY KEY,
    estimate_id INTEGER NOT NULL REFERENCES estimates(id) ON DELETE CASCADE,
    feature_id INTEGER NOT NULL REFERENCES features(id) ON DELETE RESTRICT, -- Prevent deleting a feature if it's part of an estimate
    UNIQUE (estimate_id, feature_id) -- Ensure a feature is not added multiple times to the same estimate
);

-- Junction table for selected tech stacks in an estimate
CREATE TABLE estimate_selected_tech_stacks (
    id SERIAL PRIMARY KEY,
    estimate_id INTEGER NOT NULL REFERENCES estimates(id) ON DELETE CASCADE,
    tech_stack_id INTEGER NOT NULL REFERENCES tech_stacks(id) ON DELETE RESTRICT,
    UNIQUE (estimate_id, tech_stack_id)
);

-- Junction table for selected design needs in an estimate
CREATE TABLE estimate_selected_design_needs (
    id SERIAL PRIMARY KEY,
    estimate_id INTEGER NOT NULL REFERENCES estimates(id) ON DELETE CASCADE,
    design_need_id INTEGER NOT NULL REFERENCES design_needs(id) ON DELETE RESTRICT,
    UNIQUE (estimate_id, design_need_id)
);

-- Blogs table
CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author_name VARCHAR(255), -- Since anyone can create, no user_id link initially
    slug VARCHAR(255) UNIQUE NOT NULL, -- For SEO friendly URLs
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_published BOOLEAN DEFAULT TRUE
);

-- Optional: Add some initial data for project_types, features, etc. for basic functionality
-- This would typically be managed via an admin interface or seed scripts later.

INSERT INTO project_types (name, description, base_cost) VALUES
('Website', 'Standard informational or brochure website.', 500.00),
('Web App', 'Interactive web application with custom logic.', 2000.00),
('Mobile App', 'Native or cross-platform mobile application.', 3000.00),
('SaaS Platform', 'Software as a Service application.', 5000.00),
('API Backend', 'Backend services and API development.', 1500.00);

INSERT INTO features (name, description, estimated_hours, project_type_id) VALUES
('User Login & Registration', 'Allow users to sign up and log in.', 40, NULL),
('Admin Panel', 'Dashboard for managing application data.', 80, NULL),
('Real-time Chat', 'Instant messaging functionality.', 60, NULL),
('Payment Gateway Integration', 'Integrate Stripe, PayPal, etc.', 50, NULL),
('Third-Party API Integration', 'Connect with external services.', 30, NULL),
('Push Notifications', 'Send notifications to users.', 25, NULL),
('Basic CMS', 'Content management for simple text/image updates', 40, 1), -- Specific to Website
('E-commerce Product Listing', 'Display products for sale', 60, 2); -- Specific to Web App

INSERT INTO tech_stacks (name, category, cost_modifier) VALUES
('React', 'Frontend', 1.00),
('Angular', 'Frontend', 1.10),
('Vue.js', 'Frontend', 1.00),
('Flutter', 'Mobile', 1.05),
('React Native', 'Mobile', 1.00),
('Swift (iOS)', 'Mobile', 1.15),
('Kotlin (Android)', 'Mobile', 1.15),
('Node.js/Express', 'Backend', 1.00),
('Python/Django', 'Backend', 1.05),
('Ruby on Rails', 'Backend', 1.05),
('Java/Spring', 'Backend', 1.10);

INSERT INTO design_needs (name, description, estimated_hours) VALUES
('Basic UI/UX Design', 'Standard user interface and experience design.', 40),
('Advanced UI/UX Design', 'Complex interactions, custom graphics.', 80),
('Branding Package', 'Logo design, style guide.', 30),
('Wireframes & Prototyping', 'Detailed blueprints of the application flow.', 50);

-- Trigger function to update 'updated_at' timestamp
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply the trigger to tables that have 'updated_at'
CREATE TRIGGER set_timestamp_users
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_timestamp_estimates
BEFORE UPDATE ON estimates
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_timestamp_blogs
BEFORE UPDATE ON blogs
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();
