# Getting Started with PGGM Blazor Components

This guide will help you get started with the PGGM Blazor Components library.

## Prerequisites

- .NET 6.0 or higher
- Blazor Server or Blazor WebAssembly project
- PGGM design system web components JavaScript library

## Installation

### 1. Add Package Reference

Add the PGGM Blazor Components package to your project:

```xml
<PackageReference Include="Pggm.Components" Version="1.0.0" />
```

Or using the .NET CLI:
```bash
dotnet add package Pggm.Components
```

### 2. Register Services

Add the required services in your `Program.cs`:

```csharp
using Pggm.Components.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

// Add PGGM Components services
builder.Services.AddPggmComponents();

var app = builder.Build();

// Configure the HTTP request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapRazorPages();
app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
```

### 3. Import Components

Add the components namespace to your `_Imports.razor` file:

```razor
@using Microsoft.AspNetCore.Components.Web
@using Microsoft.AspNetCore.Components.Authorization
@using Microsoft.AspNetCore.Components.Routing
@using Microsoft.AspNetCore.Components.Forms
@using System.Net.Http
@using Microsoft.JSInterop
@using Pggm.Components
```

### 4. Include Required Assets

Include the necessary CSS and JavaScript files in your `_Host.cshtml` (Blazor Server) or `index.html` (Blazor WebAssembly):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Blazor App</title>
    <base href="~/" />
    
    <!-- PGGM Design System CSS -->
    <link href="_content/Pggm.Components/css/pggm-components.css" rel="stylesheet" />
    
    <!-- Your app CSS -->
    <link href="css/site.css" rel="stylesheet" />
</head>
<body>
    <!-- Your app content -->
    
    <!-- Blazor script -->
    <script src="_framework/blazor.server.js"></script>
    
    <!-- PGGM Design System JavaScript -->
    <script src="_content/Pggm.Components/js/pggm-components.js"></script>
</body>
</html>
```

## Basic Usage

Once you have completed the installation steps, you can start using PGGM components in your Blazor pages:

### Simple Form Example

```razor
@page "/contact"

<h3>Contact Form</h3>

<EditForm Model="contactForm" OnValidSubmit="HandleSubmit">
    <DataAnnotationsValidator />
    <ValidationSummary />
    
    <div class="form-group">
        <PggmLabel For="name">Name:</PggmLabel>
        <PggmInput id="name" @bind-Value="contactForm.Name" Required="true" />
        <ValidationMessage For="() => contactForm.Name" />
    </div>
    
    <div class="form-group">
        <PggmLabel For="email">Email:</PggmLabel>
        <PggmInput id="email" Type="email" @bind-Value="contactForm.Email" Required="true" />
        <ValidationMessage For="() => contactForm.Email" />
    </div>
    
    <div class="form-group">
        <PggmLabel For="message">Message:</PggmLabel>
        <PggmTextarea id="message" @bind-Value="contactForm.Message" Required="true" />
        <ValidationMessage For="() => contactForm.Message" />
    </div>
    
    <div class="form-group">
        <PggmCheckbox @bind-Checked="contactForm.Subscribe">
            Subscribe to newsletter
        </PggmCheckbox>
    </div>
    
    <div class="form-actions">
        <PggmButton Type="submit" Appearance="primary">Send Message</PggmButton>
        <PggmButton Type="button" OnClick="ResetForm">Reset</PggmButton>
    </div>
</EditForm>

@code {
    private ContactFormModel contactForm = new();

    private void HandleSubmit()
    {
        // Handle form submission
        Console.WriteLine($"Form submitted: {contactForm.Name}, {contactForm.Email}");
    }

    private void ResetForm()
    {
        contactForm = new ContactFormModel();
    }

    public class ContactFormModel
    {
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Message { get; set; } = string.Empty;

        public bool Subscribe { get; set; }
    }
}
```

### Wizard Example

```razor
@page "/registration"

<h3>User Registration</h3>

<PggmWizard OnWizardFinished="HandleRegistrationComplete">
    <ChildContent>
        <PggmWizardForm Label="Personal Information" Active="true">
            <form>
                <fieldset>
                    <legend>Personal Details</legend>
                    
                    <div class="form-group">
                        <PggmLabel For="firstName">First Name</PggmLabel>
                        <PggmInput id="firstName" @bind-Value="registration.FirstName" Required="true" />
                    </div>
                    
                    <div class="form-group">
                        <PggmLabel For="lastName">Last Name</PggmLabel>
                        <PggmInput id="lastName" @bind-Value="registration.LastName" Required="true" />
                    </div>
                </fieldset>
            </form>
        </PggmWizardForm>
        
        <PggmWizardForm Label="Account Setup">
            <form>
                <fieldset>
                    <legend>Account Information</legend>
                    
                    <div class="form-group">
                        <PggmLabel For="username">Username</PggmLabel>
                        <PggmInput id="username" @bind-Value="registration.Username" Required="true" />
                    </div>
                    
                    <div class="form-group">
                        <PggmLabel For="password">Password</PggmLabel>
                        <PggmInput id="password" Type="password" @bind-Value="registration.Password" Required="true" />
                    </div>
                </fieldset>
            </form>
        </PggmWizardForm>
    </ChildContent>
    
    <FinishContent>
                <PggmNotification Type="success" Title="Registration Complete">
          Your account has been successfully created and is ready to use.
        </PggmNotification>
    </FinishContent>
</PggmWizard>

@code {
    private RegistrationModel registration = new();

    private Task HandleRegistrationComplete()
    {
        Console.WriteLine("Registration completed!");
        return Task.CompletedTask;
    }

    public class RegistrationModel
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
```

## Configuration

### Customizing Default Settings

You can customize default component behavior when registering services:

```csharp
builder.Services.AddPggmComponents(options =>
{
    options.DefaultButtonAppearance = "primary";
    options.DefaultInputValidation = true;
    options.DefaultWizardLabels = new WizardLabels
    {
        NextLabel = "Continue",
        BackLabel = "Previous", 
        SubmitLabel = "Finish"
    };
});
```

### CSS Customization

You can override component styles by including custom CSS after the PGGM components stylesheet:

```html
<link href="_content/Pggm.Components/css/pggm-components.css" rel="stylesheet" />
<link href="css/custom-components.css" rel="stylesheet" />
```

## Troubleshooting

### Common Issues

**Components not rendering properly:**
- Ensure the PGGM design system CSS and JavaScript files are included
- Check that services are registered in `Program.cs`
- Verify the component namespace is imported in `_Imports.razor`

**JavaScript errors:**
- Make sure the PGGM components JavaScript file is loaded after the Blazor framework script
- Check browser console for specific error messages

**Styling issues:**
- Ensure CSS files are loaded in the correct order
- Check for CSS conflicts with existing styles
- Verify PGGM design system tokens are available

### Getting Help

- Check the [component documentation](components/) for specific usage examples
- Review the [API reference](api-reference.md) for detailed property information
- Look at the sample application in the repository for working examples

## Next Steps

- Explore the [component documentation](components/) for detailed usage examples
- Check out the [API Reference](api-reference.md) for complete property and method lists
- Review the sample application for working examples
- Learn about advanced patterns and best practices