"""
InsightDraft
Entry point of the application.
"""


def display_banner():
    print("=" * 60)
    print(" InsightDraft")
    print("AI Powered Meeting Minutes Generator")
    print("=" * 60)


def display_version():
    print("Version : 0.1.0")
    print("Status  : Development")


def main():
    display_banner()
    display_version()


if __name__ == "__main__":
    main()