# DSI3 – Repositorio de Entregas Semestre 2026

Repositorio oficial para el desarrollo y entrega de actividades académicas del curso de programación 2.

Este repositorio sigue el flujo de trabajo basado en GitHub Flow y versionado semántico. La rama `main` representa siempre el estado oficial de las entregas.

## Commits

- **Tipo** → intención del cambio (obligatorio)
- **Scope** → parte afectada del código (opcional pero recomendado)
- **Descripción** → breve, clara, en presente y en minúsculas

### Tipos permitidos

- feat → nueva funcionalidad
- fix → corrección de errores
- docs → cambios en documentación
- refactor → mejora interna sin cambiar comportamiento
- chore → mantenimiento o cambios menores

## 🏷️ Entregas mediante Release Tags

Todas las entregas oficiales del curso deben realizarse mediante **Release Tags**.

Los tags deben crearse **después del merge a `main`** y **antes de la hora límite de entrega**.  
Si el tag se crea posterior al plazo máximo, la entrega no será válida.

### Release tag

Se utilizará el estándar de **Versionado Semántico (SemVer)**:

- **MAJOR (X)** → cambios incompatibles o estructurales importantes.
- **MINOR (Y)** → nuevas funcionalidades compatibles.
- **PATCH (Z)** → correcciones de errores o ajustes menores.

### Cómo crear un Release Tag

1. Asegurarse de estar en `main` actualizado:

```
git checkout main
git pull origin main
```

2. Crear el tag anotado:

```
git tag -a v1.0.0 -m "entrega actividad 01"
```

3. Enviar el tag al repositorio remoto:

```
git push origin v1.0.0
```

También se pueden enviar todos los tags:

```
git push origin --tags
```
