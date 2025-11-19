
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../language-context';

const mockRouterRefresh = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: mockRouterRefresh,
  }),
}));

const TestComponent: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <p>Current language: {language}</p>
      <button onClick={() => setLanguage('en')}>Switch to English</button>
      <button onClick={() => setLanguage('es')}>Switch to Spanish</button>
    </div>
  );
};

describe('LanguageProvider', () => {
  beforeEach(() => {
    mockRouterRefresh.mockClear();
  });

  it('should switch language and not refresh the page', () => {
    render(
      <LanguageProvider initialLanguage="es">
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByText('Current language: es')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Switch to English'));

    expect(screen.getByText('Current language: en')).toBeInTheDocument();

    expect(mockRouterRefresh).not.toHaveBeenCalled();
  });

  it('should not persist language between renders', () => {
    const { unmount } = render(
      <LanguageProvider initialLanguage="es">
        <TestComponent />
      </LanguageProvider>
    );

    fireEvent.click(screen.getByText('Switch to English'));
    expect(screen.getByText('Current language: en')).toBeInTheDocument();

    unmount();

    render(
        <LanguageProvider initialLanguage="es">
            <TestComponent />
        </LanguageProvider>
    );

    expect(screen.getByText('Current language: es')).toBeInTheDocument();
  });
});
