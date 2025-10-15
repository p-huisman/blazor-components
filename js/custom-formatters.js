// Custom formatter web components for PGGM Table demonstrations

// Status badge formatter - creates colored status badges
class StatusFormatter extends HTMLElement {
    static format(fieldName, record) {
        const value = record[fieldName];
        const element = document.createElement('span');
        
        // Define status configurations
        const statusConfig = {
            'active': { text: 'Active', class: 'status-active' },
            'inactive': { text: 'Inactive', class: 'status-inactive' },
            'pending': { text: 'Pending', class: 'status-pending' },
            'completed': { text: 'Completed', class: 'status-completed' },
            'cancelled': { text: 'Cancelled', class: 'status-cancelled' }
        };
        
        const config = statusConfig[value?.toLowerCase()] || { text: value || 'Unknown', part: 'status-unknown' };
        
        element.part = `status-badge ${config.class}`;
        element.textContent = config.text;
        
        return element;
    }
}

// Priority formatter - creates priority indicators with icons
class PriorityFormatter extends HTMLElement {
    static format(fieldName, record) {
        const value = record[fieldName];
        const container = document.createElement('div');
        container.part = 'priority-container';
        
        const icon = document.createElement('span');
        const text = document.createElement('span');
        text.part= "priority-text";
        
        switch(value?.toLowerCase()) {
            case 'high':
                icon.innerHTML = '🔴';
                text.textContent = 'High';
                container.part += ' priority-high';
                break;
            case 'medium':
                icon.innerHTML = '🟡';
                text.textContent = 'Medium';
                container.part += ' priority-medium';
                break;
            case 'low':
                icon.innerHTML = '🟢';
                text.textContent = 'Low';
                container.part += ' priority-low';
                break;
            default:
                icon.innerHTML = '⚪';
                text.textContent = value || 'None';
                container.part += ' priority-none';
        }
        
        container.appendChild(icon);
        container.appendChild(text);
        
        return container;
    }
}

// Progress bar formatter - creates visual progress bars
class ProgressFormatter extends HTMLElement {
    static format(fieldName, record) {
        const value = parseFloat(record[fieldName]) || 0;
        const container = document.createElement('div');
        container.part = 'progress-container';
        
        const progressBar = document.createElement('div');
        progressBar.part = 'progress-bar';
        
        const progressFill = document.createElement('div');
        progressFill.part = 'progress-fill';
        progressFill.style.width = `${Math.min(100, Math.max(0, value))}%`;
        
        const progressText = document.createElement('span');
        progressText.part = 'progress-text';
        progressText.textContent = `${value}%`;
        
        progressBar.appendChild(progressFill);
        container.appendChild(progressBar);
        container.appendChild(progressText);
        
        return container;
    }
}

// Avatar formatter - creates user avatars with initials
class AvatarFormatter extends HTMLElement {
    static format(fieldName, record) {
        const name = record.name || record.firstName + ' ' + (record.lastName || '');
        
        const container = document.createElement('div');
        container.part = 'avatar-container';
        
        const avatar = document.createElement('div');
        avatar.part = 'avatar';

            // Generate initials
        const initials = name
            .split(' ')
            .map(n => n.charAt(0))
            .join('')
            .toUpperCase()
            .substring(0, 2);
        
        avatar.textContent = initials;
        avatar.part += ' avatar-initials';
        
        // Generate a color based on the name
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
        const colorIndex = name.length % colors.length;
        avatar.style.backgroundColor = colors[colorIndex];
    
        const nameSpan = document.createElement('span');
        nameSpan.part = 'avatar-name';
        nameSpan.textContent = name;
        
        container.appendChild(avatar);
        container.appendChild(nameSpan);
        
        return container;
    }
}

// Action buttons formatter - creates action buttons for each row
class ActionFormatter extends HTMLElement {
    static format(fieldName, record) {
        
        const container = document.createElement('div');
        container.part = 'action-buttons';
        
        const editBtn = document.createElement('button');
        editBtn.part = 'action-btn edit-btn';
        editBtn.innerHTML = '✏️';
        editBtn.title = 'Edit';
        editBtn.onclick = () => {
            alert(`Edit record ${record.id || record.name}`);
        };
        
        const deleteBtn = document.createElement('button');
        deleteBtn.part = 'action-btn delete-btn';
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.title = 'Delete';
        deleteBtn.onclick = () => {
            if (confirm(`Delete ${record.name || 'this record'}?`)) {
                alert(`Deleted record ${record.id || record.name}`);
            }
        };
        
        const viewBtn = document.createElement('button');
        viewBtn.part = 'action-btn view-btn';
        viewBtn.innerHTML = '👁️';
        viewBtn.title = 'View Details';
        viewBtn.onclick = () => {
            alert(`View details for ${record.name || record.id}`);
        };
        
        container.appendChild(editBtn);
        container.appendChild(viewBtn);
        container.appendChild(deleteBtn);
        
        return container;
    }
}

// Tags formatter - creates a list of tags/labels
class TagsFormatter extends HTMLElement {
    static format(fieldName, record) {
        const value = record[fieldName];
        const container = document.createElement('div');
        container.className = 'tags-container';
        
        if (Array.isArray(value)) {
            value.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.part = 'tag';
                tagElement.textContent = tag;
                container.appendChild(tagElement);
            });
        } else if (typeof value === 'string' && value.includes(',')) {
            const tags = value.split(',').map(t => t.trim());
            tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.part = 'tag';
                tagElement.textContent = tag;
                container.appendChild(tagElement);
            });
        } else if (value) {
            const tagElement = document.createElement('span');
            tagElement.part = 'tag';
            tagElement.textContent = value;
            container.appendChild(tagElement);
        }
        
        return container;
    }
}

// Register all custom formatters
customElements.define('status-formatter', StatusFormatter);
customElements.define('priority-formatter', PriorityFormatter);
customElements.define('progress-formatter', ProgressFormatter);
customElements.define('avatar-formatter', AvatarFormatter);
customElements.define('action-formatter', ActionFormatter);
customElements.define('tags-formatter', TagsFormatter);