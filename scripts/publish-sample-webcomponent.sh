#!/bin/bash

# Publish script for SampleWebComponent
# This script publishes the Blazor WebAssembly project with custom elements

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
PROJECT_PATH="$PROJECT_ROOT/SampleWebComponent/SampleWebComponent.csproj"

# Default output directory
OUTPUT_DIR="$PROJECT_ROOT/publish/SampleWebComponent"

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -o|--output)
            OUTPUT_DIR="$2"
            shift 2
            ;;
        -c|--configuration)
            CONFIGURATION="$2"
            shift 2
            ;;
        --self-contained)
            SELF_CONTAINED=true
            shift
            ;;
        -h|--help)
            echo "Usage: $(basename "$0") [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  -o, --output <DIR>       Output directory (default: ./publish/SampleWebComponent)"
            echo "  -c, --configuration <CFG>  Build configuration (default: Release)"
            echo "  --self-contained         Publish as self-contained"
            echo "  -h, --help               Show this help message"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done

# Set defaults
CONFIGURATION=${CONFIGURATION:-Release}

echo "=========================================="
echo "Publishing SampleWebComponent"
echo "=========================================="
echo "Project:    $PROJECT_PATH"
echo "Output:     $OUTPUT_DIR"
echo "Config:     $CONFIGURATION"
echo ""

# Build publish command
PUBLISH_ARGS=(
    "publish"
    "$PROJECT_PATH"
    "--configuration" "$CONFIGURATION"
    "--output" "$OUTPUT_DIR"
)

if [ "$SELF_CONTAINED" = true ]; then
    PUBLISH_ARGS+=("--self-contained")
    echo "Mode:       Self-contained"
fi

echo "Running: dotnet ${PUBLISH_ARGS[*]}"
echo ""

# Run publish
dotnet "${PUBLISH_ARGS[@]}"

echo ""
echo "=========================================="
echo "Publish completed successfully!"
echo "Output: $OUTPUT_DIR"
echo "=========================================="
