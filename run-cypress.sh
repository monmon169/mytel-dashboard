#!/bin/zsh

# Log time (optional)
echo "🔁 Running test at: $(date)" >> run-log.txt

# Set PATH for Cypress tools
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

# Go to project directory
cd "/Users/bryan/Desktop/Automation/Mytel Dashboard Automation" || exit 1

# Run Cypress
/usr/local/bin/npx cypress run >> cron_log.txt 2>&1

